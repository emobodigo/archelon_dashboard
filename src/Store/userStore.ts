import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface IAdmin {
   admin_id: number;
   username: string;
   admin_fullname: string;
   admin_phone: string;
   last_active: Date;
   access_control_id: number;
   admin_level: number;
   level_title?: string;
   division_id: number;
   division_name?: string;
   admin_status_id: number;
   admin_status?: string;
   photo_path: string;
   session_token: string;
}

interface IUserState {
   admin: IAdmin;
   setLoginState: (payload: IAdmin) => void;
}

type MyPersist = (
   config: StateCreator<IUserState>,
   options: PersistOptions<IUserState | any>
) => StateCreator<IUserState>;

const useUserStore = create<IUserState>(
   (persist as MyPersist)(
      (set) => ({
         admin: {
            admin_id: 0,
            username: '',
            admin_fullname: '',
            admin_phone: '',
            last_active: new Date(),
            access_control_id: 0,
            admin_level: 0,
            level_title: '',
            division_id: 0,
            division_name: '',
            admin_status_id: 0,
            admin_status: '',
            photo_path: '',
            session_token: ''
         },
         setLoginState: (payload: IAdmin) =>
            set(() => {
               return {
                  admin: {
                     admin_id: payload.admin_id,
                     username: payload.username,
                     admin_fullname: payload.admin_fullname,
                     admin_phone: payload.admin_phone,
                     last_active: payload.last_active,
                     access_control_id: payload.access_control_id,
                     admin_level: payload.admin_level,
                     level_title: payload.level_title,
                     division_id: payload.division_id,
                     division_name: payload.division_name,
                     admin_status_id: payload.admin_status_id,
                     admin_status: payload.admin_status,
                     photo_path: payload.photo_path,
                     session_token: payload.session_token
                  }
               };
            })
      }),
      {
         name: 'ae-token',
         partialize: (state) => state.data.session_token
      }
   )
);

export default useUserStore;
