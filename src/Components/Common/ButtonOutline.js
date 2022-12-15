function Button({ name = "", color = "blue", custom = "", icon = "" }) {
    let str = "flex text-" + color + "-700 hover:text-white border border-" + color + "-700 hover:bg-" + color + "-800 focus:ring-4 focus:outline-none focus:ring-" + color + "-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-" + color + "-500 dark:text-" + color + "-500 dark:hover:text-white dark:hover:bg-" + color + "-600 dark:focus:ring-" + color + "-800" + custom;
    return (
        <button
            type="button"
            className={str}
        >{name}&nbsp;{icon}</button>
    );

}

export default Button;