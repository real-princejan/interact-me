import guide from "../../assets/data/guideData"
import GuideItem from "./GuideItem"

const ListGuide = () => {
  return (
    <>
    <ul className='mt-[38px]'> 
        {
            guide.map((item, index) => (<GuideItem item={item} key={index} />))
        }
    </ul>
    </>
  )
}

export default ListGuide