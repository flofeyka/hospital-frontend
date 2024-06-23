import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";
export default function Header() {
    const [openBar, setOpenBar] = useState(false);


    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 100 }} className="h-[12.5vh] flex items-center sm:w-[100vw] sm:justify-center z-20">
        <motion.div className={"flex"} transition={{ delay: 1 }} initial={{ marginLeft: -100, opacity: 0 }} animate={{ marginLeft: 100, opacity: 100 }}>
            <Link to="/">
                <motion.img transition={{ delay: 1 }} initial={{ marginLeft: -100, opacity: 0 }} animate={{ marginLeft: 40, opacity: 100 }} alt={"Logo"} className={"h-[12.5vh] mx-auto lg:ml-18 absolute top-0 lg:left-[250px]"} src={"https://cdn-icons-png.flaticon.com/512/1032/1032989.png"} />
            </Link>
        </motion.div>
        <div className={"absolute left-0 top-0"}>
            {openBar && <Sidebar setOpenBar={(openBar) => setOpenBar(openBar)} />}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 100 }} className={"flex md:mr-10 justify-center w-full font-semibold text-xl"}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 100 }} className={"flex justify-between sm:hidden w-[35vw] sm:w-full md:text-3xl"}>
                <Link to={"/aboutUs"} className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}
                    autoFocus>О нас</Link>
                <Link to={"/News"}
                    className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}>Новости</Link>
                <Link to={"/connection"}
                    className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}>Связь</Link>
                <Link className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"} to="/ways">
                    Направления
                </Link>
            </motion.div>
        </motion.div>

        <div className={"lg:hidden md:hidden mr-5"}>
            <button onClick={() => setOpenBar(true)}><img height={"25px"} width={"25px"} alt={"threebars"} src={"/threebars.svg"} /></button>
        </div>
    </motion.div>
}