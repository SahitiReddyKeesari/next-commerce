import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import Script from 'next/script'
import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
       <Script

dangerouslySetInnerHTML={{

  __html: `

  window["adrum-start-time"] = new Date().getTime();
(function(config){
    config.appKey = "AD-AAB-ABK-BSS";
    config.adrumExtUrlHttp = "http://cdn.appdynamics.com";
    config.adrumExtUrlHttps = "https://cdn.appdynamics.com";
    config.beaconUrlHttp = "http://pdx-col.eum-appdynamics.com";
    config.beaconUrlHttps = "https://pdx-col.eum-appdynamics.com";
    config.useHTTPSAlways = true;
    config.resTiming = {"bufSize":200,"clearResTimingOnBeaconSend":true};
    config.maxUrlLength = 512;
    config.longStackTrace = true;
})(window["adrum-config"] || (window["adrum-config"] = {}));


  `

}}

/>
<Script src="//cdn.appdynamics.com/adrum/adrum-21.7.0.3493.js" />
   
      
    </>
  )
}
