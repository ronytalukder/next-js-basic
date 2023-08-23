import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1>This is About Page</h1>

      <div className="flex justify-between flex-wrap">
        <div className="w-[50%]">
          <h2>What Makes Us Different?</h2>
          <p> At BookPattern, our talented and professional team has spent years
            building a global platform to help self-publishers get a book that
            they can be proud of. <span>By crafting stunning book covers, formatting the interior, and
            converting the book into an e-book, we make sure your book stands
            out from the rest. We believe in creativity, diversity, and putting
            our clients first. And on top of that, BookPattern is well known for
            excellent quality and unmatched client service as well.</span> </p>
        </div>

        <div className="w-[45%]">
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <p>Hover Me</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
