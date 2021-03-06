import type {InferGetStaticPropsType} from "next";
import getAllProducts from "@framework/product/get-all-products";
import {getConfig} from "@framework/api/config";
import {Layout} from "@components/common";
import {ProductCard} from "@components/Product";
import {Grid} from "@components/ui";
import {Hero} from "@components/ui";
import {Marquee} from "@components/ui";

export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Grid>
                {
                    products.slice(0,3).map(product => <ProductCard key={product.id} product={product} variant="simple"/>)
                }
            </Grid>
            <Hero headline="Cookies, ice cream and muffin" description="Cupcake ipsum dolor sit amet I love sweet chupa chups. Carrot cake chupa chups I love danish I love bonbon gummies. Wafer chocolate carrot cake icing croissant candy canes I love candy tootsie roll. Sweet I love gummi bears chocolate cake I love sugar plum I love sugar plum."/>
            <Marquee>
                {
                    products.slice(0,3).map(product => <ProductCard key={product.id} product={product} variant="slim"/>)
                }
            </Marquee>
            <Grid layout="B">
                {
                    products.slice(0,3).map(product => <ProductCard key={product.id} product={product} variant="simple"/>)
                }
            </Grid>
            <Marquee variant="secondary">
                {
                    products.slice(0,3).map(product => <ProductCard key={product.id} product={product} variant="slim"/>)
                }
            </Marquee>
        </>
  )
}


Home.Layout = Layout;


export async function getStaticProps(){
    const config = getConfig();
    const products = await getAllProducts(config);


    return {
        props: {
            products
        },
        revalidate: 4 * 60 * 60
    }
}