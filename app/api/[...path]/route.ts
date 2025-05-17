import { type NextRequest, NextResponse } from "next/server"

// This is a proxy API route to forward requests to your backend
export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const searchParams = request.nextUrl.searchParams.toString()
  const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/${path}${searchParams ? `?${searchParams}` : ""}`

  const headers = new Headers(request.headers)

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error(`Error proxying GET request to ${url}:`, error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch data from API",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/${path}`

  const headers = new Headers(request.headers)
  const body = await request.json()

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error(`Error proxying POST request to ${url}:`, error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send data to API",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/${path}`

  const headers = new Headers(request.headers)
  const body = await request.json()

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error(`Error proxying PATCH request to ${url}:`, error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update data in API",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/${path}`

  const headers = new Headers(request.headers)

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    })

    const data = await response.json()

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error(`Error proxying DELETE request to ${url}:`, error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete data in API",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
