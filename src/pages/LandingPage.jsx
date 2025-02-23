import { Header } from "../components/Header/Header"
import { Testimonies } from "../components/Testimonies/Testimonies"
import { MottoBanner } from "../components/MottoBanner/MottoBanner"
import { ShopNow } from "../components/ShopNow/ShopNow"

export const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <MottoBanner></MottoBanner>
      <ShopNow></ShopNow>
      <Testimonies></Testimonies>
    </>
  )
}