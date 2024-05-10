import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const { fullName, email, username, password, contact } = req.body
    console.log("email: ", email);

    if (
        [fullName, email, username, password, contact].some((field) => field?.trim() === "")
    ) {
        return res.json({
            error: "All Fileds are required"
        })
    }

    // Validate email using regular expression
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //     return res.json({
    //         error: "Please enter a valid email address",
    //     });
    // }

    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) {
        return res.json({
            error: "Contact must be a 10-digit number",
        });
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { username }]
    })

    if (existedUser) {
        return res.json({
            error: "User with this email Already Existed"
        })
    }
    //console.log(req.files);


    const user = await User.create({
        username,
        fullName,
        email,
        password,
        contact
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        // throw new ApiError(500, "Something went wrong while registering the user")
        return res.json({
            error: "Something went wrong while registering the user"
        })
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

const loginUser = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { email, password } = req.body

    // if (!username && !email) {
    //     throw new ApiError(400, "username or email is required")
    // }

    // Here is an alternative of above code based on logic discussed in video:
    if (!email) {
        return res.json({
            error: "Username or email required"
        })

    }

    const user = await User.findOne({
        $or: [{ email }]
    })

    if (!user) {
        return res.json({
            error: "Invalid Email"
        })
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        // throw new ApiError(401, "Incorrect Password")
        return res.json({
            error: "Incorrect Password!"
        })

    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None'
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )

})

// const logoutUser = asyncHandler(async(req, res) => {
//     await User.findByIdAndUpdate(
//         req.user._id,
//         {
//             $unset: {
//                 refreshToken: 1 // this removes the field from document
//             }
//         },
//         {
//             new: true
//         }
//     )

//     const options = {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'None'

//     }

//     return res
//     .status(200)
//     .clearCookie("accessToken", options)
//     .clearCookie("refreshToken", options)
//     .json(new ApiResponse(200, {}, "User logged Out"))
// })



export {
    registerUser,
    loginUser,
}