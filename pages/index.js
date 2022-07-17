export default function Home() {
  return (
    <div className="h-screen pb-14">
      <main className={"container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"}>
        {/*Left col*/}
        <div className={"flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"}>
          <h1 className={"my-4 text-3xl md:text-5xl text-black-800 font-bold leading-tight text-center md:text-left"}>Welcome to Fairest TestClient</h1>
          <p className={"leading-normal text-base text-gray-800 md:text-2xl mb-8 text-center md:text-left"}>
            A little client for Fairest which is doing its best.
          </p>
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Open Test Document</p>
        </div>
        {/*footer*/}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Ang Hou Fu 2022</a>
        </div>
      </main>
    </div>
  )
}
