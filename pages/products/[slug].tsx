

import {Layout} from "@components/common";
import {GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import getAllProductsPaths from "@framework/product/get-all-products-paths";
import {getConfig} from "@framework/api/config";

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async() => {

    const config = getConfig()
    const {products} = await getAllProductsPaths(config)

    return {
        paths: products.map((p) => ({params: {slug: p.slug}})),
        fallback: false
    }
}


// provide product specific data to the page
export const getStaticProps = async ({params}: GetStaticPropsContext<{slug: string}>) => {
    return {
        props: {
            product: {
                slug: params?.slug
            }
        }
    }
}


export default function ProductSlug({product}: InferGetStaticPropsType<typeof getStaticProps>){
    return (
        <div>
            {product.slug}
        </div>
    )
}

ProductSlug.Layout = Layout;