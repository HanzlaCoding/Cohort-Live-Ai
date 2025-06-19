const YOUR_API_KEY = 'BCrSwGYK2tq5i/DdCbTyAQ==KSQqfhS2BmuLtymi'; // Replace with your actual API Key
const API_URL = 'https://api.api-ninjas.com/v1/quotes';

fetch(API_URL, {
    method: 'GET',
    headers: {
        'X-Api-Key': YOUR_API_KEY
    }
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
}).then((data) => {
    console.log(data);
    const [{ author, category, quote }] = data;
    console.log(author, category, quote);

    const quoteElement = document.getElementById('motivQuote');

    quoteElement.innerHTML = `
    <blockquote class="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
                            “${quote}”
                        </blockquote>

                        <p class="author-name underline underline-offset-4 text-lg md:text-xl font-medium text-gray-400 self-end">
                            ${author}
                        </p>
    `;
}
)

// document.querySelector('.container').innerHTML = `
//             <div class="load absolute top-[55%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-900 z-10">
//             <div class="hole">
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//                 <i></i>
//             </div>

//         </div>
//         `;