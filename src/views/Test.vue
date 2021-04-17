<template>
  <!-- component -->
  <div class="flex w-screen h-screen overflow-x-hidden bg-gray-200">
    <!-- container -->

    <aside
      class="flex-col items-center hidden h-full text-gray-700 bg-white shadow lg:flex"
    >
      <!-- Side Nav Bar-->

      <div class="flex items-center w-full h-16">
        <!-- Logo Section -->
        <a class="w-6 h-6 mx-auto" href="http://svelte.dev/">
          <img
            class="w-6 h-6 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
            alt="svelte logo"
          />
        </a>
      </div>

      <ul>
        <!-- Items Section -->
        <li class="hover:bg-gray-100">
          <a
            href="."
            class="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
							0-1.79 1.11z"
              ></path>
            </svg>
            InboxInboxInbox
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="."
            class="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
              ></path>
            </svg>
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="."
            class="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>

      <div class="flex items-center w-full h-16 mt-auto">
        <!-- Action Section -->
        <button
          class="flex items-center justify-center w-10 w-full h-16 mx-auto focus:text-orange-500 hover:bg-red-200 focus:outline-none"
        >
          <svg
            class="w-5 h-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </aside>

    <div class="flex flex-col flex-1">
      <nav
        class="fixed top-0 flex justify-between w-full h-16 px-4 bg-white border-b-2"
      >
        <!-- top bar -->

        <ul class="flex items-center lg:hidden">
          <!-- top bar left -->
          <li class="w-6 h-6">
            <img
              class="w-full h-full mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="svelte logo"
            />
          </li>
        </ul>

        <ul class="flex items-center">
          <!-- top bar center -->
          <li>
            <h1 class="pl-10 text-gray-700 lg:pl-0">Svelte</h1>
          </li>
        </ul>

        <ul class="flex items-center">
          <!-- to bar right  -->

          <li class="pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </li>

          <li class="w-8 h-8">
            <img
              class="w-full h-full mx-auto rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile woman"
            />
          </li>
        </ul>
      </nav>

      <div class="mb-16">
        <div
          class="flex flex-col w-full p-2 mt-16 mb-2 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:mb-4"
        >
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Customers
                  </div>
                  <div class="text-xl font-bold">23</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    PREVIEWS
                  </div>
                  <div class="text-xl font-bold">45</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Links
                  </div>
                  <div class="text-xl font-bold">4078</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Watch Time
                  </div>
                  <div class="text-xl font-bold">31h 2m</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col w-full p-2 mb-16 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:mb-4"
        >
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Customers
                  </div>
                  <div class="text-xl font-bold">23</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    PREVIEWS
                  </div>
                  <div class="text-xl font-bold">45</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Links
                  </div>
                  <div class="text-xl font-bold">4078</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4">
            <div
              class="w-full p-4 bg-white border border-gray-100 rounded-lg widget dark:bg-gray-900 dark:border-gray-800"
            >
              <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col">
                  <div class="text-xs font-light text-gray-500 uppercase">
                    Watch Time
                  </div>
                  <div class="text-xl font-bold">31h 2m</div>
                </div>
                <svg
                  class="text-gray-500 stroke-current"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="fixed bottom-0 flex w-full h-16 overflow-x-auto bg-white border lg:hidden"
    >
      <!-- Bottom Icon Navigation Menu -->

      <a
        href="."
        class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path
            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
					2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          ></path>
        </svg>

        <span class="hidden text-sm capitalize">Inbox</span>
      </a>

      <a
        href="."
        class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm text-orange-500 whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
					0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
					5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7
					0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0
					0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>

        <span class="text-sm capitalize">github</span>
      </a>

      <a
        href="."
        class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bookmark"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>

        <span class="hidden text-sm capitalize">bookmark</span>
      </a>

      <a
        href="."
        class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83
					2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65
					0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0
					0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2
					2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
					0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0
					4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2
					0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0
					1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1
					1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0
					0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0
					1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0
					0-1.51 1z"
          ></path>
        </svg>

        <span class="hidden text-sm capitalize">Settings</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
