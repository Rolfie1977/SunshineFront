import { Header } from "../components/Header/Header"
import { Testimonies } from "../components/Testimonies/Testimonies"
import { Motto } from "../components/Motto/Motto"
import { ShopNow } from "../components/ShopNow/ShopNow"

export const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <Motto></Motto>
      <ShopNow></ShopNow>
      <Testimonies></Testimonies>
    </>
  )
}