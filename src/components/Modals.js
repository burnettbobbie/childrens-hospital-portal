import React from 'react'

import BloodModal from './home/Blood';
import XrayModal from './home/Xray';
import MRIModal from './home/Mri';
import Map from '../pages/Home/Map';
import Wards from '../pages/Hospital/Wards';
import Clinics from '../pages/Hospital/Clinics';
import Theatres from '../pages/Hospital/Theatres';
import PlayAreas from '../pages/Hospital/PlayAreas';

//determines which modal to open using data-modal value
const ModalManager = ({
  closeFn = () => null,
  modal = ''
}) => (
  <>
    <BloodModal
      closeFn={closeFn}
      open={modal === 'blood-modal'} />

    <XrayModal
      closeFn={closeFn}
      open={modal === 'xray-modal'} />

    <MRIModal
      closeFn={closeFn}
      open={modal === 'mri-modal'} />

    <Map
      closeFn={closeFn}
      open={modal === 'map-modal'} />
    
    <Wards
      closeFn={closeFn}
      open={modal === 'wards-modal'} />

    <Clinics
      closeFn={closeFn}
      open={modal === 'clinics-modal'} />
     
     <Theatres
      closeFn={closeFn}
      open={modal === 'theatres-modal'} />

    <PlayAreas
      closeFn={closeFn}
      open={modal === 'play-modal'} />
      
 
  </>
)

export default ModalManager