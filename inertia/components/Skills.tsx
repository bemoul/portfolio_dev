import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon";
import { AdonisIcon } from "./icons/AdonisIcon";
import { DockerIcon } from "./icons/DockerIcon";
import { ZapierIcon } from "./icons/ZapierIcon";
import { RemotionIcon } from "./icons/RemotionIcon";
import { OpenAiLogo } from "./icons/OpenAILogo";
import { PostgresIcon } from "./icons/PostgresIcon";

export const Skills = () => {
  return (
    <>
      <Section className="flex flex-col items-start gap-4 font-['Geist-Regular']">
        <div className="flex max-md:flex-col gap-4">

          <div className="flex flex-col gap-2 flex-1  rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border">
            <div className="w-full flex items-center justify-center">
              <ReactIcon size={60} className="animate-spin" style={{ animationDuration: "10s" }} />
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">ReactJS</h3>
            <p className="text-sm text-muted-foreground">Je m'appuie sur ReactJS pour construire des applications web rapide et hautement interactives.</p>
          </div>

          <div className="flex flex-col justify-center gap-2 flex-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border">
            <div className="w-full flex items-center justify-center">
              <AdonisIcon size={60} />
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">AdonisJS</h3>
            <p className="text-sm text-muted-foreground">En combinant la puissance d'AdonisJS avec React, je crée des applications web robustes et complexes adaptées à vos besoins.</p>
          </div>

          <div className="flex flex-col gap-2 flex-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border">
            <div className="w-full flex items-center justify-center">
              <RemotionIcon size={60} className="flex flex-center" />
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Remotion</h3>
            <p className="text-sm text-muted-foreground">Je transforme vos idées en vidéos et vous aide à gagner en visibilité sur le web et vos réseaux sociaux.</p>

          </div>
        </div>
        <div className="flex max-md:flex-col gap-4">
          <div className="w-full flex flex-col gap-2 flex-2 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border">
            <div className="flex flex-row items-center gap-4">
              <DockerIcon size={42} />
              <PostgresIcon size={42} />
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Back-end, CI/CD</h3>
            <p className="text-sm text-muted-foreground">Maîtrisant le back-end avec PostgreSQL et le CI/CD via Docker, je déploie efficacement des solutions web.</p>
          </div>

          <div className="flex flex-col gap-2 flex-3 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border">
            <ZapierIcon size={80} className="mr-10" />
            <p className="text-sm text-muted-foreground mb-2">
              Je libère votre entreprise de leurs tâches répétitives et booste votre productivité.
            </p>
            <OpenAiLogo size={80} className="mr-10" />
            <p className="text-sm text-muted-foreground">
            En utilisant les modèles IA, j'améliore les photos et j'utilise l'IA pour fournir des solutions avancées pour vos projets.
            </p>
          </div>
        </div>

      </Section>

      {/* <Spacing size="md" /> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-16 max-w-4xl md:auto-rows-[16rem]">
        <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
          <div className="w-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" style={{ transform: "rotate(357.385deg)" }}>
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
            </svg>
            <p className="text-lg font-semibold">
              React
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-sm">
                I am an "expert" in React libarary and I can create whatever you want wit this.
              </span>
            </p>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
          <div className="overflow-hidden w-full h-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="flex flex-col gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            <p className="text-lg font-semibold">
              TailwindCSS
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-sm">Since 2020, I start using TailwindCSS and I think it's the best tool for CSS.</span>
            </p>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1">
          <img src="" className="w-full h-full object-cover" />
          <div className="flex flex-col gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
            </svg>
            <p className="text-lg font-semibold">
              TypeScript is my 2n language
            </p>
            <p className="text-sm text-muted-foreground"></p>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-2"><div>
          <img src="" className="w-full h-full object-cover" />
        </div>
          <div className="flex flex-col gap-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
            </svg>
            <p className="text-lg font-semibold">
              Backend with Next.JS and SaaS tools
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-sm">
                I have a complete knowledge of Next.JS and many SaaS tools that enable you to create whatever you want.
              </span>
            </p>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border border justify-between flex flex-col space-y-4 [&amp;>p:text-lg]">
          <div className="flex flex-col gap-4">
            <div className="group relative">
              <p className="text-sm font-medium leading-none flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round ">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 0 0-16 0"></path>
                </svg>
                <span>user</span>
              </p>
              <p>
                Can you create a website ?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
            </svg>
            <p className="text-lg font-semibold">
              Perfect usage of AI
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-sm">I have created several applications using AI tools.</span>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};