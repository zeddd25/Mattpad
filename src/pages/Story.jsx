import { AiOutlineSend } from "react-icons/ai";
import ButtonLike from "../components/ButtonLike";
import NavbarStory from "../components/NavbarStory";

const Story = () => {
    return (
        <>
        <NavbarStory />
        <div className="flex justify-center mt-6">
          <div className="flex flex-col gap-2">
          <img src="../public/images/posterfilm3.jpg" alt="" className="rounded-md w-[130px] h-[196px] object-cover"/>
          <ButtonLike />
          </div>
        <div className="px-10 flex flex-col gap-5 justify-start relative overflow-hidden">
        {/* <ButtonLike /> */}
        <div className="container-scroll scroll-smooth relative w-full px-6 py-12 h-[500px] border-2 border-slate-700  rounded-lg shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-7 lg:pb-28">
          <h1 className="font-outfit mx-auto text-3xl font-bold text-center text-black">What You Wish For</h1>
          <div className="mt-8 prose prose-slate mx-auto lg:prose-lg leading-8 tracking-tight text-[18px] text-[#222222]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus dolore est ratione voluptatibus hic at sint labore laboriosam enim nemo maxime esse ipsa voluptates ex fugit illum, quaerat dolorem!
              Quisquam, expedita et error illum dolores a nulla eius dicta! At provident, ipsum commodi in sunt libero perspiciatis quod iure, quibusdam non eaque vel deleniti, delectus reprehenderit enim praesentium cupiditate!
              Facere maiores neque, sunt doloribus animi porro autem, laborum, sapiente alias asperiores ea in. Iste architecto sit dolores praesentium saepe laudantium nemo libero. Consequatur, tenetur harum eum nisi corrupti ex!
              Adipisci minus odio vel odit obcaecati quam culpa natus nam praesentium consequuntur fugiat, neque cupiditate dolores perferendis animi dolore, corrupti dolorum doloremque? Ex odit veritatis sit! Non sunt velit exercitationem. lorLorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus dolore est ratione voluptatibus hic at sint labore laboriosam enim nemo maxime esse ipsa voluptates ex fugit illum, quaerat dolorem!
              Quisquam, expedita et error illum dolores a nulla eius dicta! At provident, ipsum commodi in sunt libero perspiciatis quod iure, quibusdam non eaque vel deleniti, delectus reprehenderit enim praesentium cupiditate!
              Facere maiores neque, sunt doloribus animi porro autem, laborum, sapiente alias asperiores ea in. Iste architecto sit dolores praesentium saepe laudantium nemo libero. Consequatur, tenetur harum eum nisi corrupti ex!
              Adipisci minus odio vel odit obcaecati quam culpa natus nam praesentium consequuntur fugiat, neque cupiditate dolores perferendis animi dolore, corrupti dolorum doloremque? Ex odit veritatis sit! Non sunt velit exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cumque dolorum quaerat quas aperiam architecto reiciendis adipisci sit. Quam perspiciatis tempore alias qui quisquam quibusdam dolorem atque accusamus exercitationem cupiditate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis est itaque dolor dolorem tempora, officia ratione. Possimus suscipit itaque eligendi excepturi id voluptatibus perferendis incidunt minima laudantium iusto, reprehenderit non! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nulla ipsam quo consectetur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio magnam et ducimus, porro molestiae autem quam! Nisi, inventore! Facilis magni, hic aspernatur tempora ab ad voluptates inventore facere cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magni. Perspiciatis, autem veritatis? Velit molestiae explicabo impedit, magni dolor ducimus inventore ut dolorem adipisci consequatur. Provident tenetur excepturi odit ipsum?
              Commodi corrupti possimus nobis molestias eligendi, harum repellat voluptatem dolore mollitia nam facilis, soluta provident ducimus fugit debitis. Cumque itaque ab, repellendus earum veritatis pariatur rerum hic iure minima nobis!
              Nesciunt, hic, doloremque reiciendis aspernatur fugiat facere, laboriosam tempora dicta eligendi impedit dignissimos rem maiores assumenda beatae temporibus quam numquam nisi enim accusantium? Iste excepturi facilis ducimus consequuntur, dolorum odit!
              Saepe nostrum aut necessitatibus soluta. Doloribus iure rerum, earum ratione impedit ad ea maiores rem? Itaque nihil ad, repudiandae at ex nulla nam reprehenderit distinctio voluptatibus iusto vero. Delectus, tempore.
              Nesciunt pariatur culpa labore! Possimus, vitae. Recusandae a exercitationem iste hic distinctio quas ullam eum praesentium blanditiis voluptas quos, porro nobis modi, adipisci veniam nulla voluptatum repellendus labore ut magnam!
              Laboriosam molestiae laudantium aut dolorum ipsam tempora similique officiis placeat corrupti veritatis at corporis, mollitia laborum ullam distinctio aperiam, recusandae neque? Iure fugit explicabo dolorum neque accusantium quae iusto obcaecati!
              Facere harum quos possimus magnam molestiae ut dolorem, eligendi quis, cumque at quas voluptas? Cupiditate, harum asperiores distinctio deserunt quae nisi accusamus dolorum aspernatur quos deleniti debitis ab quod ducimus.
              Perferendis incidunt obcaecati sequi eaque, necessitatibus, aliquid quidem aperiam veniam eos commodi minima temporibus voluptas, officiis earum nemo provident officia id. Optio dolorem ad quas alias unde animi hic ipsum.
              Cum culpa aspernatur eligendi quae deserunt necessitatibus optio modi blanditiis soluta iste. Dolore voluptatibus at nesciunt provident. Commodi corporis voluptatibus nisi, ipsum excepturi sequi. Quae pariatur totam consequuntur exercitationem odit.
              Voluptatibus eaque repellat, possimus, repellendus nisi alias, eius quae qui vel dicta itaque consequuntur. Voluptates iusto unde velit, culpa ipsa eaque doloribus sit enim, voluptate labore mollitia quibusdam ullam provident?
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-4xl sm:max-w-3xl font-outfit flex items-center gap-10 px-2 mx-auto rounded-3xl border-2 border-slate-700 ">
        <input  className="p-3 w-full bg-transparent outline-none font-medium" type="text" placeholder="Tulis komentar..."/>
        <button>
        <AiOutlineSend className="text-3xl text-slate-700 hover:text-slate-900"/>
        </button>
        </div>

        <div className="w-full lg:max-w-4xl sm:max-w-3xl font-outfit mx-auto border-2 rounded-xl border-slate-700 py-4 p-2 flex flex-col gap-2 h-[230px] overflow-y-scroll">
        <div className="flex items-center gap-2">
        <img
            src="../public/images/hengker.png"
            className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
            alt="profile"
        />
        <h1>Budak Bager🍆</h1>
        </div>
        <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
        <div className="flex items-center gap-2">
        <img
            src="../public/images/hengker.png"
            className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
            alt="profile"
        />
        <h1>Budak Bager🍆</h1>
        </div>
        <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
        <div className="flex items-center gap-2">
        <img
            src="../public/images/hengker.png"
            className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
            alt="profile"
        />
        <h1>Budak Bager🍆</h1>
        </div>
        <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
        <div className="flex items-center gap-2">
        <img
            src="../public/images/hengker.png"
            className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
            alt="profile"
        />
        <h1>Budak Bager🍆</h1>
        </div>
        <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
        </div>
      </div>
      </div>
      </>
    );
  };
  
  export default Story;
  