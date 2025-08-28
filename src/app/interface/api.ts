export namespace API {
  export namespace Playlists {
    export interface Params {
    }

    export interface Playlist {
      createdAt: string;
      genre: string;
      id: string;
      image: string;
      name: string;
      updatedAt: string;
      _count: Count;
    }

    export interface Count {
      songs: number;
    }
  }

  export namespace Playlist {
    export interface Playlist {
      id: string;
      name: string;
      genre: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      songs: Songs[];
    }

    export interface Songs {
      addedAt: string;
      song: Song;
    }

    export interface Song {
      id: string;
      artists: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    }
  }

  export namespace Auth {
    export interface RegisterBody {
      username: string;
      password: string;
      email?: string;
    }

    export interface LoginBody {
      username: string;
      password: string;
    }

    export interface LoginResponse {
      token: string;
    }
  }

  export namespace Spotify {
    export interface SetUserTokenBody {
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
      expires?: number;
    }

    export interface AccessResponse {
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
      expires?: number;
    }
  }
}
