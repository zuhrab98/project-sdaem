import React from 'react'

import ContentLoader from 'react-content-loader'

type Props = { col: number }

export const Skeleton: React.FC<Props> = ({ col }) => {
    return (
        <>
            {[...new Array(col)].map((_, i) => (
                <ContentLoader
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    height={539}
                    speed={2}
                    viewBox="0 0 420 539"
                    width={420}
                >
                    <rect height="12" rx="0" ry="0" width="0" x="153" y="180" />
                    <rect height="9" rx="0" ry="0" width="0" x="153" y="192" />
                    <rect height="225" rx="14" ry="14" width="404" x="2" y="3" />
                    <rect height="48" rx="18" ry="18" width="111" x="15" y="246" />
                    <rect height="37" rx="18" ry="18" width="80" x="165" y="251" />
                    <rect height="37" rx="18" ry="18" width="64" x="255" y="251" />
                    <rect height="37" rx="18" ry="18" width="55" x="329" y="251" />
                    <rect height="40" rx="5" ry="5" width="372" x="20" y="386" />
                    <rect height="11" rx="5" ry="5" width="139" x="21" y="432" />
                    <rect height="35" rx="18" ry="18" width="118" x="22" y="470" />
                    <rect height="35" rx="18" ry="18" width="118" x="270" y="470" />
                    <rect height="19" rx="5" ry="5" width="232" x="22" y="315" />
                    <rect height="20" rx="5" ry="5" width="103" x="23" y="347" />
                    <rect height="20" rx="5" ry="5" width="99" x="154" y="347" />
                </ContentLoader>
            ))}
        </>
    )
}
