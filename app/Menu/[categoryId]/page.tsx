import MenuSection from "@/app/components/menu-section"
export default async function Categories_Items({params}:any) {

      return (
        <MenuSection categoryId={params.categoryId} />
      )
}