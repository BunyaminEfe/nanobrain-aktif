import { useRef, VFC } from 'react';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { extend, useFrame, useThree } from '@react-three/fiber';

extend({ ShaderPass })

const datas = {
	enabled: true
}

export const FXAAPass: VFC = () => {
	const passRef = useRef<ShaderPass>(null)
	const { size } = useThree()

	const update = () => {
		const pass = passRef.current!
		pass.enabled = datas.enabled

		if (datas.enabled) {
		}
	}

	useFrame(() => {
		update()
	})

	return (
		<shaderPass
			ref={passRef}
			attachArray="passes"
			args={[FXAAShader]}
			uniforms-resolution-value={[1 / size.width, 1 / size.height]}
		/>
	)
}
