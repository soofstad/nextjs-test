export async function GET() {
  const posts = {valla: "balla",lorem:
        "Ut vitae elit sed massa vulputate consequat. Sed faucibus eros felis, ac ornare leo hendrerit at. Curabitur tristique at nunc nec iaculis. Nam neque erat, vestibulum et massa vitae, eleifend vestibulum mauris. Suspendisse id nisi ligula. Phasellus eget lobortis eros. Phasellus condimentum ipsum ligula, eget pretium urna porta quis. Cras fringilla neque facilisis convallis blandit. Suspendisse eget justo at diam cursus commodo vitae eu ligula."

  }
  return Response.json(posts)
}