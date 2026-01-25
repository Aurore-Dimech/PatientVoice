<template>
    <div class="bg-gray-50 min-h-screen p-8 flex flex-col items-center">
        <section class="mb-12 text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
            <p class="text-xl text-gray-500">
                Une question ou besoin d’aide ? Notre équipe est à votre écoute.
            </p>
        </section>

        <section class="bg-white border-2 border-cyan-700/10 rounded-xl p-8 w-full max-w-md">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Nous joindre</h2>
            <div class="flex items-start mb-6">
                <div class="bg-cyan-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div>
                    <span class="font-semibold text-gray-800">Téléphone</span><br>
                    <a
                        href="tel:0102030405"
                        class="text-cyan-700 underline rounded transition-colors
                               focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
                    >01 02 03 04 05</a>
                </div>
            </div>
            <div class="flex items-start">
                <div class="bg-cyan-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div>
                    <span class="font-semibold text-gray-800">Email</span><br>
                    <a
                        href="mailto:contact@patientvoice.fr"
                        class="text-cyan-700 underline rounded transition-colors
                               focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
                    >contact@patientvoice.fr</a>
                </div>
            </div>
        </section>
    </div>
</template>