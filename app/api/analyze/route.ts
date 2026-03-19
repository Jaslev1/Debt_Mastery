
export async function POST(req) {
  const body = await req.json()

  return Response.json({
    result: "Top actions: 1) Call creditor 2) Request hardship 3) Validate debt"
  })
}
