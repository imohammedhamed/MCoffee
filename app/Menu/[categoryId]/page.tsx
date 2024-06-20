import MenuSection from "../../components/menu-section"
export default async function Categories_Items({params}:any) {

      return (
        <MenuSection categoryId={params.categoryId} />
      )
}