import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment, ContactShadows, PresentationControls, Html, useCursor } from '@react-three/drei';
import Reveal from './Reveal';
import AppStoryModal from './AppStoryModal';

// CONTENT DATA: Mobile Apps (Array for Carousel)
const APP_LIST = [
    {
        id: "m-doc",
        title: "DocScanner Pro",
        image: "/3d/doc.gif",
        tags: ["Flutter", "OpenCV", "Cloud Vision"],
        details: {
            challenge: "Detecting document edges accurately in poor lighting conditions.",
            solution: "Used OpenCV for edge detection and perspective transformation before simple image processing pipelines."
        }
    },
    {
        id: "m-repwise",
        title: "RepWise AI Coach",
        image: "/3d/repwise.gif",
        tags: ["Flutter", "TensorFlow Lite", "Firebase"],
        details: {
            challenge: "Building a real-time rep counter that runs entirely on-device without draining battery.",
            solution: "Implemented custom TFLite models optimized for mobile edge computing, achieving 60fps tracking accuracy."
        }
    },
    {
        id: "m-urban",
        title: "Urban Safety",
        image: "/3d/urban.gif",
        tags: ["Flutter", "Google Maps API", "Socket.io"],
        details: {
            challenge: "Real-time visualization of safety data points on a crowded map interface.",
            solution: "Clustered map markers and optimized rendering loops to handle thousands of concurrent data points."
        }
    }
];

const AbstractPhone = ({ position, rotation, imgUrl, scale = 1, onClick }) => {
    const [hovered, setHovered] = useState(false);
    useCursor(hovered, 'pointer', 'auto');

    return (
        <group
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* 0. INVISIBLE HITBOX (VISIBLE FOR RAYCAST, INVISIBLE TO EYE) */}
            {/* Positioned slightly forward (z=0.2) to catch clicks before they hit HTML */}
            <mesh position={[0, 0, 0.2]}>
                <boxGeometry args={[1.4, 2.7, 0.5]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {/* 1. Main Housing (Metallic Frame) */}
            <RoundedBox args={[1.2, 2.4, 0.1]} radius={0.12} smoothness={4}>
                <meshStandardMaterial
                    color={hovered ? "#444" : "#2a2a2a"}
                    roughness={0.1}
                    metalness={0.9}
                />
            </RoundedBox>

            {/* 2. Front Glass (Glossy Bezel) */}
            <RoundedBox args={[1.15, 2.35, 0.02]} position={[0, 0, 0.05]} radius={0.08} smoothness={4}>
                <meshPhysicalMaterial
                    color="#000000"
                    roughness={0.0}
                    metalness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0}
                />
            </RoundedBox>

            {/* 3. Screen (Luminous & HTML Overlay) */}
            <mesh position={[0, 0, 0.061]}>
                <planeGeometry args={[1.08, 2.28]} />
                <meshBasicMaterial color="#000000" />

                <Html
                    transform
                    scale={0.175}
                    position={[0, 0, 0.01]}
                    zIndexRange={[100, 0]}
                    style={{
                        pointerEvents: 'none'
                    }}
                >
                    <div style={{
                        width: '300px',
                        height: '620px',
                        background: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: '24px',
                        backfaceVisibility: 'hidden',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    }}>
                        {imgUrl ? (
                            <img
                                src={imgUrl}
                                alt="preview"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        ) : (
                            <div style={{ color: '#333', fontFamily: 'sans-serif', fontSize: '12px' }}>LOADING</div>
                        )}
                    </div>
                </Html>
            </mesh>
        </group>
    );
};

const MobileShowcase = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cameraPosition = isMobile ? [0, 0, 9] : [0, 0, 6.5];
    const spacing = isMobile ? 1.3 : 2;
    const sideScale = isMobile ? 0.85 : 0.9;

    // Limits
    const rotationLimits = isMobile
        ? { global: false, polar: [0, 0], azimuth: [-0.2, 0.2] }
        : { global: false, polar: [-0.4, 0.2], azimuth: [-1, 1] };

    return (
        <>
            <section style={{ height: '700px', position: 'relative', overflow: 'hidden', paddingTop: '4rem', background: 'transparent' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '120%',
                    height: '80%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: -1
                }} />

                <Reveal>
                    <div style={{ textAlign: 'left', marginBottom: '1rem', position: 'relative', zIndex: 1, padding: '0 1rem' }}>
                        <h2 style={{
                            fontSize: isMobile ? '2.8rem' : '3.5rem',
                            fontWeight: '900',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2',
                            textTransform: 'uppercase'
                        }}>
                            {isMobile ? (
                                <>
                                    FLUTTER <br />
                                    <span style={{ color: 'var(--color-primary)', display: 'inline-block', position: 'relative' }}>
                                        APP DEVELOPMENT
                                        <svg width="100%" height="8" style={{ position: 'absolute', bottom: 2, left: 0, opacity: 0.4 }}>
                                            <path d="M0 4 Q 50 8 100 4" stroke="currentColor" fill="none" strokeWidth="2" />
                                        </svg>
                                    </span>
                                </>
                            ) : (
                                <>
                                    FLUTTER <span style={{ color: 'var(--color-primary)', display: 'inline-block', position: 'relative' }}>
                                        APP DEVELOPMENT
                                        <svg width="100%" height="8" style={{ position: 'absolute', bottom: 2, left: 0, opacity: 0.4 }}>
                                            <path d="M0 4 Q 50 8 100 4" stroke="currentColor" fill="none" strokeWidth="2" />
                                        </svg>
                                    </span>
                                </>
                            )}
                        </h2>
                        <p style={{ maxWidth: '500px', margin: '0.8rem auto', opacity: 0.6, fontSize: '0.9rem' }}>
                            Tap on a device to explore the case study.
                        </p>
                    </div>
                </Reveal>

                <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                    <Canvas dpr={[1, 2]} camera={{ position: cameraPosition, fov: 45 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                        <Environment preset="city" />

                        <PresentationControls
                            {...rotationLimits}
                            config={{ mass: 2, tension: 400 }}
                            snap={{ mass: 4, tension: 400 }}
                            cursor={false}
                        >
                            <group position={[0, -0.5, 0]}>
                                {/* GLOBAL CLICK CATCHER (Transparent Background Plane) */}
                                <mesh
                                    position={[0, 0, -1]}
                                    onClick={() => setActiveIndex(1)} // Default to Center App (Repwise)
                                >
                                    <planeGeometry args={[100, 100]} />
                                    <meshBasicMaterial transparent opacity={0} />
                                </mesh>

                                {/* Center Phone - Repwise (Index 1) */}
                                <AbstractPhone
                                    position={[0, 0, 0]}
                                    rotation={[0, 0, 0]}
                                    imgUrl={APP_LIST[1].image}
                                    onClick={() => setActiveIndex(1)}
                                />

                                {/* Left Phone - Doc (Index 0) */}
                                <AbstractPhone
                                    position={[-spacing, 0, -0.5]}
                                    rotation={[0, 0.35, 0]}
                                    scale={sideScale}
                                    imgUrl={APP_LIST[0].image}
                                    onClick={() => setActiveIndex(0)}
                                />

                                {/* Right Phone - Urban (Index 2) */}
                                <AbstractPhone
                                    position={[spacing, 0, -0.5]}
                                    rotation={[0, -0.35, 0]}
                                    scale={sideScale}
                                    imgUrl={APP_LIST[2].image}
                                    onClick={() => setActiveIndex(2)}
                                />
                            </group>
                        </PresentationControls>

                        <ContactShadows
                            position={[0, -1.8, 0]}
                            opacity={0.4}
                            scale={10}
                            blur={2.5}
                            far={4}
                        />
                    </Canvas>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    width: '100%',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '10px',
                    letterSpacing: '2px',
                    pointerEvents: 'none'
                }}>
                    {'CLICK TO VIEW'}
                </div>
            </section>

            {/* New Carousel Modal */}
            <AppStoryModal
                activeIndex={activeIndex}
                apps={APP_LIST}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />
        </>
    );
};

export default MobileShowcase;
