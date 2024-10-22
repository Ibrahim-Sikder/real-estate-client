import Image from "next/image";



export type TTeam = {
  _id: string,
  name: string,
  designation: string,
  date: string,
  social_link: string,
  images: string[]
}


export default async function TeamSection() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/team`, {
    cache: "no-store",
  });
  const teamData = await response.json()


  if (!teamData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Teams data not found! </h1>

  }

  return (
    <div className="my-20">
      <h2 className="text-center text-gray-800 uppercase">
        Meet Our Team
      </h2>
      <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
        {teamData?.data?.teams.map((team: TTeam) => (
          <div key={team._id} className="bg-white p-5 shadow-md">
            <div className="flex justify-center">
              {
                team.images.slice(0, 1).map((img) => (
                  <>
                    <Image width={150}
                      height={150}
                      className="rounded-full h-32 w-32" src={img} alt='Team' />
                  </>
                ))
              }
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">
              {team.name}
            </h3>
            <p className="text-center text-gray-600">{team.designation}</p>
            {/* <div className="flex justify-center space-x-3 mt-5">
              <Link href="https://www.facebook.com/AnaaDevelopersLtd">
                <Image src={facebook} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="" className="w-5" />
              </Link>
              <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                <Image src={youtube} alt="" className="w-5" />
              </Link>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
