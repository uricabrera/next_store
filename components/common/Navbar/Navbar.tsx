import {FC} from "react";
import {Container} from "@components/ui";
import Link from "next/link";
import styles from "./Navbar.module.css"
import {Usernav} from "@components/common";

const Navbar: FC = () => {
    return(
        <Container>
            <div className={styles.root}>
                <div className="flex flex-1 items-center">
                    <Link href="/">
                        <a className={styles.logo}>
                            URI_STORE
                        </a>
                    </Link>
                    <nav className="ml-6 space-x-6">
                        <Link href="/">
                            <a className={styles.link}>All</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.link}>Clothes</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.link}>Accesories</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.link}>Shoes</a>
                        </Link>
                    </nav>
                    <div className="flex flex-1 justify-end">
                        <Usernav/>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Navbar;