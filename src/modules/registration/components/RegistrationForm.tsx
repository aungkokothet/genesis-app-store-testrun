"use client"

import React from "react"

export function RegistrationForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name (optional)
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name (optional)
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-transform duration-200 transform hover:scale-[1.02]"
      >
        Join us
      </button>

    </form>
  )
}
