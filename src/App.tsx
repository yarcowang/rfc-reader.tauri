import {useState, useEffect, Fragment} from 'react'
import {invoke} from '@tauri-apps/api/tauri'
import {DEFAULT_CONTENT, Hits, rfcs} from "./util";
// import reactLogo from './assets/react.svg'

function App() {
    const [rfcno, setRfcno] = useState<string>('')
    const [content, setContent] = useState<string>(DEFAULT_CONTENT)
    const [hits, setHits] = useState<Hits[]>([])

    function onLoadRfc(rfcno: string) {
        rfcno = parseInt(rfcno).toString()
        if (!rfcno.length) return;

        increHit(rfcno)
        invoke<string>('get_rfc', {rfcno}).then(data => {
            setContent(data.trim())
        }).catch(e => {
            // TODO: error handler
            console.log(e)
        })
    }

    function increHit(rfcno: string) {
        rfcno = parseInt(rfcno).toString()
        if (!rfcno.length) return

        let idx = hits.findIndex(hits => hits.no === rfcno)
        if (idx === -1) {
            setHits([...hits, ({no: rfcno, hits: 1})])
        } else {
            setHits(prev => {
                return prev.map((hits, i) => {
                    if (i === idx) {
                        return {...hits, hits: hits.hits + 1}
                    }
                    return hits
                })
            })
        }
    }

    const hitsTpl = hits.sort((l, r) => r.hits - l.hits).slice(0, 10).map(hits =>
        <li key={hits.no} className="underline text-sm cursor-pointer" onClick={() => {setRfcno(hits.no);onLoadRfc(hits.no)}}>
            RFC {hits.no} / hits: {hits.hits}
        </li>
    )

    const rfcsTpl = rfcs.map(layer => {
        const layerTpl = layer.rfcs.map(rfc =>
            <li key={rfc.no} className="underline text-sm cursor-pointer" onClick={() => { setRfcno(rfc.no);onLoadRfc(rfc.no)}}>{rfc.title} <span className="float-right">RFC {rfc.no}</span></li>
        )
        return (
            <Fragment key={layer.title}>
                <li className="mt-1 list-none text-sm font-bold italic">{layer.title}</li>
                {layerTpl}
            </Fragment>
        )
    })

    useEffect(() => {
        // invoke<string>('get_hits').then(data => {
        //
        // }).catch(e => {
        //     // TODO: error handler
        //     console.log(e)
        // })
    }, [hits])

    return (
        <div className="flex flex-row">
            <div className="basis-1/4 bg-gray-300">
                <div className="sticky top-0 p-3 flex flex-col ">
                    <div className="">
                        <label className="font-bold">
                            RFC
                            <input type="text" placeholder="Number" className="ml-2 py-1 px-2 border-1 rounded w-20"
                                   onKeyDown={e => { if (e.key === 'Enter') { onLoadRfc(rfcno) } }}
                                   onChange={(e) => setRfcno(e.target.value)} value={rfcno} />
                            <button className="px-2 align-middle text-center" onClick={() => onLoadRfc(rfcno)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                </svg>
                            </button>
                        </label>
                    </div>

                    <div className="pt-3">
                        <h5 className="font-bold">Your Recent Hits / Top 10</h5>
                        <ul className="list-inside list-disc">
                            {hitsTpl}
                        </ul>

                        <h5 className="mt-3 font-bold">Famous & Common</h5>
                        <ul className="list-inside list-square">
                            {rfcsTpl}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="p-5 basis-3/4 max-h-full text-sm">
                <pre className="w-10/12 mx-auto">
                    {content}
                </pre>
            </div>

            {/*<div className="fixed bottom-3 right-3 p-1.5 rounded bg-orange-500 text-white cursor-pointer">*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
            {/*         stroke="currentColor" className="w-6 h-6">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}

        </div>
    )
}

export default App
