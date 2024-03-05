"use server"

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_API_URL + "/login"

export async function apiLogin(email, senha) {

    const options = {
        method: "POST",
        body: JSON.stringify({email, senha}),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) {
        throw new Error("Falha no Login")
    }

    const json = await resp.json()

    cookies().set('spotyfilmes_jwt', json.token, {
        maxAge: 60 * 60 * 24 * 7
    })
}

export async function apiLogout() {
    cookies().delete('spotyfilmes_jwt')
}