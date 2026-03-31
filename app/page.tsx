function KittyCard() {
  return (
    <>
      <img src="kitten_photo.jpeg" alt="photo of a kitten" />
      <h2>Kitty Name</h2>
      <p>This is some information about the kitty. Like what are they famous for and stuff.</p>
    </>
  )
}

export default function Home() {
  return (
    <>
      <h1>Amazing Kitties</h1>
      <KittyCard />
    </>
  );
}
