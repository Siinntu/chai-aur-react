import React from 'react';

function Card({username,profession}) {
  console.log(username)
    return (
        <div>
            <figure class="bg-slate-100 rounded-xl p-66 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {username}
      </div>
      <div>
       {profession}
      </div>
    </figcaption>
  </div>
</figure> 
        </div>
    );
}

export default Card;
