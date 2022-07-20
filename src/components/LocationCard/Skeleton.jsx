import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={395}
		height={523}
		viewBox='0 0 395 523'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='43' y='20' rx='12' ry='12' width='403' height='227' />
		<rect x='205' y='151' rx='0' ry='0' width='7' height='6' />
		<rect x='202' y='266' rx='9' ry='9' width='81' height='37' />
		<rect x='294' y='268' rx='9' ry='9' width='61' height='33' />
		<rect x='370' y='270' rx='8' ry='8' width='55' height='32' />
		<rect x='60' y='336' rx='7' ry='7' width='241' height='19' />
		<rect x='60' y='364' rx='7' ry='7' width='210' height='21' />
		<rect x='60' y='408' rx='6' ry='6' width='369' height='59' />
		<rect x='60' y='493' rx='10' ry='10' width='124' height='38' />
		<rect x='323' y='493' rx='11' ry='11' width='108' height='34' />
		<rect x='60' y='266' rx='10' ry='10' width='118' height='46' />
	</ContentLoader>
)
export default Skeleton
