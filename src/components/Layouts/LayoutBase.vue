<template>
  <div class="flex w-full h-screen">
    <div class="w-full lg:flex-1 flex flex-col justify-center items-center bg-green-500">
      <slot />
    </div>
    <div class="hidden lg:block flex-1">
      <img
        class="block w-full h-full object-cover"
        src="../../assets/img/GreetingMap.png"
        alt="Greeting"
      />
    </div>
  </div>
</template>
