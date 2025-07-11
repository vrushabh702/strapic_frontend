// api/apiClient.js

const STRAPIC_BASE_URL = process.env.NEXT_PUBLIC_API_URL
const STRAPIC_JWT_TOKEN = process.env.NEXT_PUBLIC_STRAPIC_JWT_TOKEN

export async function fetchFromStrapi(endpoint, options = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(STRAPIC_JWT_TOKEN && {
      Authorization: `Bearer ${STRAPIC_JWT_TOKEN}`,
    }),
  }
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    next: { revalidate: 60 }, // optional: for ISR in Next.js App Router
  }

  try {
    const res = await fetch(`${STRAPIC_BASE_URL}${endpoint}`, config)
    if (!res.ok) {
      const errorBody = await res.text()
      throw new Error(
        `Fetch error: ${res.status} - ${res.statusText} \n ${errorBody}`
      )
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    return null
  }
}
