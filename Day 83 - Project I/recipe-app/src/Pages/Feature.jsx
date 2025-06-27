import React from 'react'

const Feature = () => {

    const dummyRecipes = [
        {
            id: 'rec-bfast-001',
            title: 'Morning Glory Pancakes',
            chefName: 'Chef Sunny',
            category: 'Breakfast',
            description: 'Fluffy buttermilk pancakes stacked high, topped with fresh berries and a drizzle of maple syrup.',
            imageUrl: 'https://images.unsplash.com/photo-1555776014-a95079a40733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        },
        {
            id: 'rec-lunch-002',
            title: 'Mediterranean Chicken Wrap',
            chefName: 'Chef Olive',
            category: 'Lunch',
            description: 'Grilled chicken, fresh veggies, feta, and a tangy tzatziki sauce wrapped in warm pita bread.',
            imageUrl: 'https://images.unsplash.com/photo-1512621776951-a579eddc87f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-dinner-003',
            title: 'Hearty Beef Stroganoff',
            chefName: 'Chef Ivan',
            category: 'Dinner',
            description: 'Tender beef strips in a creamy mushroom sauce, served over a bed of al dente egg noodles.',
            imageUrl: 'https://images.unsplash.com/photo-1546548882-7e05f039a489?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-dessert-004',
            title: 'Decadent Chocolate Mousse',
            chefName: 'Chef Sweet Tooth',
            category: 'Dessert',
            description: 'Light and airy dark chocolate mousse, rich and indulgent, finished with a raspberry garnish.',
            imageUrl: 'https://images.unsplash.com/photo-1579737466857-e179294ae7b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-app-005',
            title: 'Crispy Spring Rolls',
            chefName: 'Chef Wok',
            category: 'Appetizer',
            description: 'Golden fried spring rolls filled with fresh vegetables and glass noodles, served with sweet chili dip.',
            imageUrl: 'https://images.unsplash.com/photo-1627931393390-e7f0e9f69752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-snack-006',
            title: 'Avocado Toast Deluxe',
            chefName: 'Chef Green Thumb',
            category: 'Snack',
            description: 'Toasted sourdough bread topped with creamy avocado, chili flakes, and a sprinkle of everything bagel seasoning.',
            imageUrl: 'https://images.unsplash.com/photo-1616815340623-fd1e227a92cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-soup-007',
            title: 'Creamy Tomato Basil Soup',
            chefName: 'Chef Garden',
            category: 'Soup',
            description: 'A comforting classic, rich tomato soup simmered with fresh basil and a touch of cream.',
            imageUrl: 'https://images.unsplash.com/photo-1547592180-85f17399034d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-drink-008',
            title: 'Tropical Sunset Smoothie',
            chefName: 'Chef Blender',
            category: 'Beverage',
            description: 'A vibrant blend of mango, pineapple, and passionfruit, perfect for a refreshing treat.',
            imageUrl: 'https://images.unsplash.com/photo-1558064971-d14f40f0c053?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 'rec-salad-009',
            title: 'Quinoa Power Bowl',
            chefName: 'Chef Vitality',
            category: 'Salad',
            description: 'A nutritious and filling bowl with fluffy quinoa, roasted vegetables, and a lemon-tahini dressing.',
            imageUrl: 'https://images.unsplash.com/photo-1601678822002-c98f99f93933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const renderRecipes = dummyRecipes.map((item, idx) => {
        let {title, chefName, category, description, imageUrl} = item;
        return (
        <>
        <div key={idx} className="card shrink-0 h-40 w-95 overflow-hidden rounded-lg bg-zinc-50 flex items-center justify-between gap-x-2 font-[inter]">
                <img className='w-1/2 h-full object-cover rounded-xl' src={imageUrl} alt="" />
                <div className="content flex py-2 px-2 flex-col gap-y-2">
                <div className="cat-text w-full flex justify-between items-center">
                <div className="main">
                <h4 className='text-xl mb-1 font-bold'>{title.slice(0, 6).concat('...')}</h4>
                <p className='text-xs text-zinc-500'>by {chefName.slice(0, 10).concat('...')}</p>
                </div>
                <p className="category text-xs bg-amber-300 px-3 py-1 rounded-full w-fit">{category}</p>
                </div>
                <p className='text-xs text-gray-600'>{description.slice(0, 30).concat('...')}</p>
                <button className='bg-orange-500 text-white px-3 py-2 rounded-full text-xs cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors'>View Recipe</button>
                </div>
            </div>
            </>
        )
    });

  return (
    <section className="feature min-h-screen w-full">
        <h3 className='text-5xl font-[daffiys] text-center py-8'>Featured Recipes</h3>

        <div className="recipes-cards p-5 flex flex-wrap items-center gap-10">
            {renderRecipes}
        </div>
    </section>
  )
}

export default Feature