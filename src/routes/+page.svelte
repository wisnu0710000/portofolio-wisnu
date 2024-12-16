<script>
    import Header from "$lib/global_components/header.svelte";
    import logoW from "$lib/assets/logoW.png";
    import { fly } from "svelte/transition";
    let Openbutton = false;
    function toggleContent() {
        Openbutton = !Openbutton;
    }
    let name = "";
    let email = "";
    let message = "";

    /**
     * @param {{ preventDefault: () => void; }} event
     */
    function handleSubmit(event) {
        event.preventDefault();
        console.log({ name, email, message });
    }
</script>

<Header />

<section
    class=" bg-gray-900 min-h-screen justify-center flex items-center relative"
>
    <div class=" absolute left-20 -translate-y-20 antialiased items-center">
        <h1 class="text-7xl font-albert text-white font-extrabold">
            Wisnu Bestama
        </h1>
        <h2
            class="hover: italic transition ease-in-out delay-150 hover:text-white duration-300"
            style="color: #CDC9C9;"
        >
            Pengembang Front-end Interaktif
        </h2>
        <button
            class="bg-red-500 py-2 px-5 font-medium shadow-md mt-10 animated-button text-white"
            on:click={toggleContent}
        >
            Tentang Saya
        </button>
    </div>

    {#if Openbutton}
        <div
            class=" mt-2 p-4 min-h-screen bg-white rounded shadow-lg fixed justify-between"
            in:fly={{ y: -50, duration: 500 }}
            out:fly={{ y: -50, duration: 500 }}
        >
            <div class="">
                <button
                    on:click={toggleContent}
                    class="absolute top-2 right-2 text-xl text-gray-500"
                >
                    &times;
                </button>

                <h1 class="text-lg font-extrabold mb-2">Tentang Saya</h1>
                <h2 class="text-sm mb-4">Pengembang Front-end interaktif</h2>
                <p class="text-sm text-left">
                    Saya Wisnu Bestama, seorang pengembang Front-end asal
                    indonesia berusia 24 tahun .
                </p>
                <p class="text-sm text-left">
                    Saya orang yang suka membuat hal-hal aneh dengan teknologi
                    web. Saya suka menyelesaikan masalah desain,
                </p>
                <p class="text-sm text-left">
                    Saya suka menyelesaikan masalah desain, membuat antarmuka
                    pengguna yang cerdas, dan membayangkan
                </p>
                <p class="text-sm text-left">
                    interaksi yang bermanfaat, mengembangkan pengalaman web &
                    aplikasi web yang kaya . Saat tidak bekerja atau
                    mengutak-atik kode .
                </p>
            </div>

            <div
                class="absolute top-10 p-6 bg-white shadow-lg rounded w-[500px] right-6"
            >
                <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Nama</label
                        >
                        <input
                            type="text"
                            id="name"
                            bind:value={name}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Masukkan nama"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                            >Email</label
                        >
                        <input
                            type="email"
                            id="email"
                            bind:value={email}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Masukkan email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="message"
                            class="block text-sm font-medium text-gray-700"
                            >Pesan</label
                        >
                        <textarea
                            id="message"
                            bind:value={message}
                            rows="4"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Tulis pesan kamu"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Kirim
                    </button>
                </form>
            </div>
        </div>
    {/if}

    <div class="absolute text-center">
        <img
            src={logoW}
            alt="additional designer image"
            class="max-w-xl h-auto mb-6 animate-pulse"
        />
    </div>
    <div class=" absolute right-6 flex flex-col space-y-3 mb-9">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a
            href="https://www.linkedin.com/in/wisnu-bestama-b84395336/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                class="w-8 h-8 text-gray-500 hover:text-white transition duration-300"
                viewBox="0 0 64 48"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.76 14.67C16.96 14.67 19.52 12.72 19.52 10.35C19.52 7.98 16.92 6.03 13.76 6.03C10.6 6.03 8 7.98 8 10.35C8 12.72 10.6 14.67 13.76 14.67ZM25 17.94V42H34.92V30.12C34.92 26.97 35.72 23.94 40.88 23.94C46.04 23.94 46.04 27.54 46.04 30.3V42H56V28.8C56 22.32 54.16 17.34 44.08 17.34C39.24 17.34 36 19.32 34.68 21.21H34.56V17.91H25.04L25 17.94ZM8.8 17.94H18.76V42H8.8V17.94Z"
                    fill="currentColor"
                />
            </svg>
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://github.com/wisnu0710000">
            <svg
                class="w-8 h-8 text-gray-500 hover:text-white transition duration-300"
                viewBox="0 0 52 56"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M25.9797 4.17267C13.4215 4.1672 3.25 15.1156 3.25 28.6289C3.25 39.3149 9.61289 48.3985 18.4742 51.7344C19.6676 52.057 19.4848 51.1438 19.4848 50.5203V46.282C12.5938 47.1516 12.3145 42.2406 11.8523 41.4203C10.918 39.7031 8.70898 39.2656 9.36914 38.4453C10.9383 37.5758 12.5379 38.6641 14.3914 41.6117C15.732 43.75 18.3473 43.3891 19.6727 43.0336C19.9621 41.7485 20.5816 40.6 21.4348 39.7086C14.2949 38.3305 11.3191 33.6383 11.3191 28.0602C11.3191 25.3531 12.1469 22.8649 13.7719 20.8578C12.7359 17.5492 13.8684 14.7164 14.0207 14.2953C16.9711 14.011 20.0383 16.5703 20.277 16.7727C21.9527 16.286 23.8672 16.0289 26.0102 16.0289C28.1633 16.0289 30.0828 16.2969 31.7738 16.7891C32.3477 16.3188 35.1914 14.1203 37.9336 14.3883C38.0809 14.8094 39.1879 17.5766 38.2129 20.8414C39.8582 22.8539 40.6961 25.3641 40.6961 28.0766C40.6961 33.6656 37.7 38.3633 30.5398 39.7195C31.1531 40.3691 31.6401 41.1437 31.9723 41.9981C32.3045 42.8526 32.4752 43.7698 32.4746 44.6961V50.8484C32.5152 51.3406 32.4746 51.8274 33.2363 51.8274C42.2297 48.5625 48.7043 39.4133 48.7043 28.6344C48.7043 15.1156 38.5277 4.17267 25.9797 4.17267Z"
                    fill="currentColor"
                />
            </svg>
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://www.linkedin.com/in/wisnu-bestama-b84395336/">
            <svg
                class="w-8 h-8 text-gray-500 hover:text-white transition duration-300"
                viewBox="0 0 56 50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M52.4067 12.5C50.61 13.2291 48.6733 13.7083 46.6667 13.9375C48.72 12.8333 50.3067 11.0833 51.0533 8.97915C49.1167 10.0208 46.97 10.75 44.7067 11.1666C42.8633 9.37498 40.2733 8.33331 37.3333 8.33331C31.85 8.33331 27.37 12.3333 27.37 17.2708C27.37 17.9791 27.4633 18.6666 27.6267 19.3125C19.32 18.9375 11.9233 15.375 6.99999 9.97915C6.13666 11.2916 5.64666 12.8333 5.64666 14.4583C5.64666 17.5625 7.39666 20.3125 10.1033 21.875C8.44666 21.875 6.90666 21.4583 5.55332 20.8333V20.8958C5.55332 25.2291 9.00666 28.8541 13.58 29.6666C12.1119 30.0269 10.5701 30.0769 9.07666 29.8125C9.7104 31.5885 10.9516 33.1425 12.6257 34.2561C14.2998 35.3697 16.3227 35.9868 18.41 36.0208C14.8719 38.5219 10.486 39.8737 5.97332 39.8541C5.17999 39.8541 4.38666 39.8125 3.59332 39.7291C8.02666 42.2708 13.3 43.75 18.9467 43.75C37.3333 43.75 47.4367 30.125 47.4367 18.3125C47.4367 17.9166 47.4367 17.5416 47.4133 17.1458C49.3733 15.8958 51.0533 14.3125 52.4067 12.5Z"
                    fill="currentColor"
                />
            </svg>
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://www.linkedin.com/in/wisnu-bestama-b84395336/">
            <svg
                class="w-8 h-8 text-gray-500 hover:text-white transition duration-300"
                viewBox="0 0 61 53"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M33.1129 4.41669C35.9722 4.42331 37.4235 4.43656 38.6766 4.46748L39.1696 4.48294C39.739 4.5006 40.3007 4.52269 40.9793 4.54919C43.6836 4.6596 45.5289 5.0306 47.1479 5.57606C48.8254 6.13698 50.2386 6.89665 51.6518 8.12227C52.9447 9.22585 53.9448 10.5613 54.5823 12.0354C55.2101 13.4421 55.6371 15.0454 55.7642 17.3973C55.7947 17.9847 55.8201 18.4727 55.8404 18.9696L55.8557 19.398C55.8938 20.4845 55.9091 21.7455 55.9141 24.2299L55.9167 25.8773V28.7702C55.9229 30.381 55.9034 31.9917 55.8582 33.602L55.843 34.0304C55.8226 34.5273 55.7972 35.0154 55.7667 35.6028C55.6396 37.9546 55.2076 39.5557 54.5823 40.9646C53.9448 42.4387 52.9447 43.7742 51.6518 44.8778C50.3816 46.0011 48.8446 46.8701 47.1479 47.424C45.5289 47.9694 43.6836 48.3404 40.9793 48.4509L39.1696 48.5171L38.6766 48.5304C37.4235 48.5613 35.9722 48.5767 33.1129 48.5811L31.2168 48.5834H27.8897C26.035 48.589 24.1802 48.5721 22.326 48.5326L21.8329 48.5193C21.2296 48.4995 20.6263 48.4766 20.0233 48.4509C17.3189 48.3404 15.4737 47.9694 13.8521 47.424C12.1564 46.8698 10.6202 46.0009 9.35081 44.8778C8.05697 43.7744 7.05596 42.4389 6.41773 40.9646C5.78994 39.5579 5.36294 37.9546 5.23585 35.6028L5.1596 34.0304L5.1469 33.602C5.10004 31.9917 5.07886 30.381 5.08335 28.7702V24.2299C5.07632 22.6191 5.09496 21.0083 5.13927 19.398L5.15706 18.9696C5.1774 18.4727 5.20281 17.9847 5.23331 17.3973C5.3604 15.0454 5.7874 13.4444 6.41519 12.0354C7.05491 10.5607 8.05767 9.22519 9.35336 8.12227C10.622 6.99944 12.1573 6.13052 13.8521 5.57606C15.4737 5.0306 17.3164 4.6596 20.0233 4.54919C20.6994 4.52269 21.2636 4.5006 21.8329 4.48294L22.326 4.46969C24.1794 4.43045 26.0333 4.41352 27.8872 4.4189L33.1129 4.41669ZM30.5 15.4584C27.1296 15.4584 23.8971 16.6217 21.5139 18.6924C19.1306 20.7631 17.7917 23.5716 17.7917 26.5C17.7917 29.4285 19.1306 32.2369 21.5139 34.3077C23.8971 36.3784 27.1296 37.5417 30.5 37.5417C33.8705 37.5417 37.1029 36.3784 39.4862 34.3077C41.8694 32.2369 43.2084 29.4285 43.2084 26.5C43.2084 23.5716 41.8694 20.7631 39.4862 18.6924C37.1029 16.6217 33.8705 15.4584 30.5 15.4584ZM30.5 19.875C31.5014 19.8749 32.4929 20.0461 33.4181 20.3789C34.3433 20.7117 35.1839 21.1996 35.8921 21.8147C36.6002 22.4297 37.162 23.16 37.5454 23.9637C37.9287 24.7674 38.1261 25.6289 38.1263 26.4989C38.1265 27.3689 37.9294 28.2304 37.5464 29.0343C37.1633 29.8381 36.6018 30.5685 35.8939 31.1838C35.186 31.7991 34.3455 32.2872 33.4204 32.6203C32.4954 32.9534 31.5039 33.1249 30.5026 33.125C28.4803 33.125 26.5408 32.427 25.1109 31.1846C23.6809 29.9422 22.8776 28.2571 22.8776 26.5C22.8776 24.743 23.6809 23.0579 25.1109 21.8154C26.5408 20.573 28.4803 19.875 30.5026 19.875M43.8463 12.1459C43.0037 12.1459 42.1956 12.4367 41.5998 12.9544C41.004 13.472 40.6692 14.1742 40.6692 14.9063C40.6692 15.6384 41.004 16.3405 41.5998 16.8582C42.1956 17.3759 43.0037 17.6667 43.8463 17.6667C44.6889 17.6667 45.497 17.3759 46.0929 16.8582C46.6887 16.3405 47.0234 15.6384 47.0234 14.9063C47.0234 14.1742 46.6887 13.472 46.0929 12.9544C45.497 12.4367 44.6889 12.1459 43.8463 12.1459Z"
                    fill="currentColor"
                />
            </svg>
        </a>
    </div>
</section>

<section class="min-h-screen"></section>

<style>
    .animated-button:hover {
        position: relative;
        padding: 8px 20px;
        font-size: 16px;
        color: #ffff;
        background: radial-gradient(circle, #1c3eff, #f44646);
        background-size: 800%;
        border: none;

        cursor: pointer;
        outline: none;
        animation:
            gradientMove 3s ease infinite,
            bounce 0.9s ease infinite alternate;
        transition: transform 0.3s ease;
    }

    @keyframes gradientMove {
        0% {
            background-position: 200% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 400% 50%;
        }
    }
</style>
