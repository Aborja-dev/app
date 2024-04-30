import { Icon, Image } from "../components/shared"
import { BaseLayout } from "../layout/BaseLayout"
import { Breadcrumb } from "./Product/sections/Breadcrumbs"

export const BlogPage = () => {
    return (
        <BaseLayout>
            <Breadcrumb />
            <section className="mt-8">
                <Image className="w-full h-[250px] lg:h-[400px] mb-6" url="https://random.imagecdn.app/500/500" />
                <div className="lg:w-11/12 lg:mx-auto lg:bg-white lg:-translate-y-40 p-4">
                <p className="text-red-500 ">Children's Books, Science & Math</p>
                <h2 className="font-bold text-3xl mb-6">‘American Dirt’ Invites Readers into the Journey of Mexican</h2>
                <p className="flex mb-6 items-center">
                    <Icon size="w-6 h-6" url="icons/Heart.svg" />
                    <span className="text-gray-500">August 19, 2020</span>
                </p>
                <article className="px-6 lg:px-0 border-b pb-4 lg:w-full lg:text-lg">
                    <p data-id="summary" className="font-bold mb-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus mollis et.</p>
                    <p className="mb-4 text-justify">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                    <p className="mb-4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.
                    </p>
                    <p className="mb-4 text-justify">
                        Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.
                    </p>
                    <Image className="w-full lg:my-10 h-[250px] lg:h-[450px] mb-6" url="https://random.imagecdn.app/500/500" />
                <div className="flex gap-2 my-6 lg:w-4/5 lg:mx-auto">
                    <p className="bg-gray-200 py-2 px-4 rounded-md">Arts</p>
                    <p className="bg-gray-200 py-2 px-4 rounded-md">Books</p>
                    <p className="bg-gray-200 py-2 px-4 rounded-md">Kids</p>
                    <p className="bg-gray-200 py-2 px-4 rounded-md">Romance</p>
                </div>
                </article>
                
                <p className="flex m-6 items-center italic md:w-5/6 md:mx-auto">
                    Share this
                    <Icon size="w-6 h-6" url="icons/Heart.svg" />
                    <span className="font-bold text-xl">Share</span>
                </p>
                <article className="flex gap-4 m-6 p-12 bg-orange-100 md:w-5/6 md:mx-auto">
                    <Image url="https://random.imagecdn.app/500/500" className="w-1/4 h-full rounded-full overflow-hidden" />
                    <div className="w-3/4">
                        <p className="font-bold mb-2 xl:text-3xl xl:pb-4">Andrea Gard</p>
                        <p className="line-clamp-3 xl:text-3xl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </article>
                </div>
            </section>
        </BaseLayout>
    )
}