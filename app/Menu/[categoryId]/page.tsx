import MenuSection from "../../components/menu-section"
export default function page({params}:any) {
      return (
        <MenuSection categoryId={params.categoryId} />
      )
}