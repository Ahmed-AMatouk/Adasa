import React from 'react'
import { Outlet, Link, useOutletContext} from 'react-router-dom';
import { useState } from 'react';
export default function Blog() {
  const [indexFilter, setIndexFilter] = useState(0);
  const [indexPhase, setIndexPhase] = useState(0);
  const [indexveiw, setIndexVeiw] = useState(1);
  const { blogs } = useOutletContext();
  const posts = blogs.posts;
  const [search, setSearch] = useState("");

  function filterOfPosts(index){
    if (index === 0) {
      return posts;
    }
    else if(index === 1){
      return posts.filter((element) => element.category === "إضاءة");
    }
    else if(index === 2){
      return posts.filter((element) => element.category === "بورتريه");
      
    }
    else if(index === 3){
      return posts.filter((element) => element.category === "مناظر طبيعية");
      
    }
    else if(index === 4){
      return posts.filter((element) => element.category === "تقنيات");
      
    }
    else if(index === 5){
      return posts.filter((element) => element.category === "معدات");

    }
    else if(index === 6){
      return posts.filter((element)=> element.title.includes(search)||element.excerpt.includes(search))
    }
  }
  function getFilter(index){
    return `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 
    ${indexFilter === index ?"bg-linear-to-r from-orange-500 to-orange-600 text-white":"bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`

  }
  function getPhase(index){
    return `${filterOfPosts(indexFilter).length <= index ? "hidden":""} min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300
    ${indexPhase === index*6 ?"bg-linear-to-r from-orange-500 to-orange-600 text-white":"bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`

  }
  
  return ( // 1 --> 1 - 6     2 --> 7 - 12    3 --> 13 - 18
    <>
      <main className="grow pt-20">
  <div className="min-h-screen bg-[#0a0a0a]">
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><span className="section-label inline-flex items-center gap-2 mb-6"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z">
            </path>
          </svg>مدونتنا</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">استكشف <span className="gradient-text">مقالاتنا</span></h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
      </div>
    </div>
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80"><input value={search} onInput={(e)=>{setSearch(e.target.value);setIndexFilter(6)}} placeholder="ابحث في المقالات..." className="input-dark w-full px-5 py-3 pr-12" type="text" /><svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg></div>
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={()=>{setIndexFilter(0);setIndexPhase(0)}} className={getFilter(0)}>جميع المقالات</button>
            <button onClick={()=>{setIndexFilter(1);setIndexPhase(0)}} className={getFilter(1)}>إضاءة</button>
            <button onClick={()=>{setIndexFilter(2);setIndexPhase(0)}} className={getFilter(2)}>بورتريه</button>
            <button onClick={()=>{setIndexFilter(3);setIndexPhase(0)}} className={getFilter(3)}>مناظر طبيعية</button>
            <button onClick={()=>{setIndexFilter(4);setIndexPhase(0)}} className={getFilter(4)}>تقنيات</button>
            <button onClick={()=>{setIndexFilter(5);setIndexPhase(0)}} className={getFilter(5)}>معدات</button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-neutral-400">عرض <span className="font-bold text-white">28</span> مقالات</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button onClick={()=>setIndexVeiw(1)} className={`p-2 rounded-lg transition-all duration-300 ${indexveiw == 1 ?"bg-orange-500 text-white":"text-neutral-400 hover:text-white"}`} title="عرض شبكي"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                </path>
              </svg></button>
            <button onClick={()=>setIndexVeiw(2)} className={`p-2 rounded-lg transition-all duration-300 ${indexveiw == 2 ?"bg-orange-500 text-white":"text-neutral-400 hover:text-white"}`} title="عرض قائمة"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg></button></div>
        </div>
      </div>
      <div className={`${indexveiw == 1? "grid md:grid-cols-2 lg:grid-cols-3 gap-8":"flex flex-col gap-6"}       `}>
        {filterOfPosts(indexFilter).filter((element , index)=>index >= indexPhase && index < indexPhase+6).map((element) => {
          return <>{ indexveiw == 1?
            <article className="group card overflow-hidden" style={{animationDelay: `${indexFilter * 100}ms`}}><Link className="block" to={`/blog/${element.slug}`} data-discover="true">
            <div className="relative h-52 overflow-hidden"><img alt={element.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={element.image} />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{element.category}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3"><span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>{element.readTime}</span><span className="w-1 h-1 bg-neutral-600 rounded-full" /><span>{element.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                {element.title}</h3>
              <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{element.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-3"><img alt={element.author.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src={element.author.avatar} />
                  <div>
                    <p className="text-sm font-medium text-white">{element.author.name}</p>
                    <p className="text-xs text-neutral-500">{element.author.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg></div>
              </div>
            </div>
          </Link></article> :
            <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden w-full" style={{animationDelay: `${indexFilter * 100}ms`}}><Link className="flex flex-col md:flex-row" href="/blog/portrait-photography-secrets" data-discover="true">
    <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden"><img alt={element.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={element.image} />
      <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
    </div>
    <div className="flex-1 p-6 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-3 mb-3"><span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">{element.category}</span><span className="flex items-center gap-1 text-sm text-neutral-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>{element.readTime}</span><span className="flex items-center gap-1 text-sm text-neutral-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>{element.date}</span></div>
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
      {element.title}</h2>
      <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">{element.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3"><img alt={element.author.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src={element.author.avatar} />
          <div>
            <p className="text-sm font-semibold text-white"> {element.author.name}</p>
            <p className="text-xs text-neutral-500"> {element.author.role}</p>
          </div>
        </div><span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ
          المقال<svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg></span>
      </div>
    </div>
            </Link>
            </article>

          }
          </>
        })}
        
      </div>
      <div className="flex justify-center items-center gap-2 mt-12"><button onClick={()=>{indexPhase != 0? setIndexPhase(indexPhase-6):''}} className={`p-3 rounded-xl border transition-all duration-300 ${filterOfPosts(indexFilter).length <= 6?"hidden":''}  ${indexPhase != 0? "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]":"bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"}`}><svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg></button>
        <div className="flex items-center gap-1">
          <button onClick={() => setIndexPhase(0)} className={`${getPhase(0)} ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>1</button>
          <button onClick={() => setIndexPhase(6)} className={`${getPhase(1)} ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>2</button>
          <button onClick={() => setIndexPhase(12)} className={`${getPhase(2)} ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>3</button>
          <button onClick={() => setIndexPhase(18)} className={`${getPhase(3)} ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>4</button>
          <button onClick={() => setIndexPhase(24)} className={`${getPhase(4)} ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>5</button>
        </div><button onClick={()=>{indexPhase != 24?setIndexPhase(indexPhase+6):''}} className={`p-3 rounded-xl border transition-all duration-300 ${filterOfPosts(indexFilter).length <= 6?"hidden":''}  ${indexPhase != 24? "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]":"bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"}`}><svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg></button>
      </div>
      <p className={`text-center text-neutral-500 mt-4 text-sm ${filterOfPosts(indexFilter).length <= 6?"hidden":''}`}>صفحة 1 من 5</p>
    </div>
  </div>
</main>
    
    </>
  )
}
