function Button({ name = "", color = "blue", custom = "", icon = "" }) {
    let str = " flex px-2.5 py-2.5 bg-" + color + "-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-" + color + "-700 hover:shadow-lg focus:bg-" + color + "-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-" + color + "-800 active:shadow-lg transition duration-150 ease-in-out " + custom;
    return (
        <button
            type="button"
            className={str}
        >{name}&nbsp;{icon}</button>
    );
}

export default Button;