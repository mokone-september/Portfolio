import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <div className="relative w-full max-w-md mx-auto aspect-square sm:aspect-[4/3]">
            <Image
              src={logo}
              alt="logo"
              loading="eager"
              priority
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 40vw"
            />
          </div>
        </>
    )
}
export default HeroImage