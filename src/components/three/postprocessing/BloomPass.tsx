import React, { useRef, VFC } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { extend, useFrame } from '@react-three/fiber';

extend({ UnrealBloomPass })

const datas = {
	enabled: true,
	exposure: 0.7,
	strength: 2,
	radius: 0.5,
	threshold: 0.6
}

export const BloomPass: VFC = () => {
	const passRef = useRef<UnrealBloomPass>(null)

	const update = (gl: THREE.WebGLRenderer) => {
		passRef.current!.enabled = datas.enabled
		gl.toneMappingExposure = datas.enabled ? Math.pow(datas.exposure, 4.0) : 1

		if (datas.enabled) {
			passRef.current!.strength = datas.strength
			passRef.current!.radius = datas.radius
			passRef.current!.threshold = datas.threshold
		}
	}

	useFrame(({ gl }) => {
		update(gl)
	})

	return <unrealBloomPass ref={passRef} attachArray="passes" />
}
