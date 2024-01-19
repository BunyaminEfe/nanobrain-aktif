import { VFC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { BloomPass } from './postprocessing/BloomPass';
import { Effects } from './postprocessing/Effects';
import { FocusPass } from './postprocessing/FocusPass';
import { FXAAPass } from './postprocessing/FXAAPass';
import { ScreenPlane } from './ScreenPlane';

export const TCanvas: VFC = () => {
	const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

	return (
		<Canvas className='canvas-container' camera={OrthographicCamera} dpr={window.devicePixelRatio}>
			{/* objects */}
			<ScreenPlane />
			{/* effects */}
			<Effects sRGBCorrection={false}>
				<FXAAPass />
				<BloomPass />
				<FocusPass />
			</Effects>
			{/* helper */}
		</Canvas>
	)
}
