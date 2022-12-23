import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();


const Sidebar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Medi Chat</p>
    </div>

)

const ChannelListContainer = () => {
    const logout = () => {
        cookies.removes("token");
        cookies.removes("userId");
        cookies.removes("userName");
        cookies.removes("fullName");
        cookies.removes("avatarUrl");
        cookies.removes("hashedPassword");
        cookies.removes("phoneNumber");

        window.location.reload(); // this reloads the page
    }

  return (
   <>
    <Sidebar />
    <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
                <TeamChannelList
                    {...listProps}
                    type="team"

                />
            )}
            preview={(previewProps)=>(
                <TeamChannelPreview
                {...previewProps}
                type="team"
                />
            )}
            />
             <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
                <TeamChannelList
                    {...listProps}
                    type="messaging"

                />
            )}
            preview={(previewProps)=>(
                <TeamChannelPreview
                {...previewProps}
                type="messaging"
                />
            )}
            />
    </div>
   </>
  )
}

export default ChannelListContainer