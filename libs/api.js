// this is a utility function to fetch data from Strapi CMS
// frontend/libs/api.js
const STRAPIC_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const STRAPIC_JWT_TOKEN = process.env.NEXT_PUBLIC_STRAPIC_JWT_TOKEN

export async function fetchFromStrapic(endPoint, options = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPIC_JWT_TOKEN}`,
  }
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  }

  const res = await fetch(`${STRAPIC_BASE_URL}${endPoint}`, config)

  if (!res.ok) {
    throw new Error(`Fetch errors : ${res.statusText}`)
  }
  return res.json()
}
