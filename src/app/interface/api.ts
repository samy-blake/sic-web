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
}
