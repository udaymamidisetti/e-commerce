import { Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
function CategoriesSubTab({ subcategories }) {
    const navigate = useNavigate();
    return (
        <>
            {subcategories.map((element, i) =>
                <div className="px-1 py-1" key={i}>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => navigate("/products?subcategory=" + element._id)}
                                className={`${active ? 'bg-kazari-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm  text-left`}
                            >
                                {element.name}
                            </button>
                        )}
                    </Menu.Item>
                </div>
            )}
        </>
    );
}

export default CategoriesSubTab;