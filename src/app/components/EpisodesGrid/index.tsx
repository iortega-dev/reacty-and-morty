import React, { useEffect, useState } from 'react';
import { Tooltip, Modal } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { API } from '~Api';
import { EpisodeInitialState, Episode } from '~Types/Episode';

import {
  EpisodeGridCell,
  EpisodesGridContainer,
  RowCentered,
  AbsoluteLoading,
} from './styled-components';
import { EpisodeInfo } from '~Components/EpisodeInfo';

export const EpisodesGrid = () => {
  const episodesProvider = new API('episode');
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(
    EpisodeInitialState
  );
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllEpisodes();
  }, []);

  const getAllEpisodes = async (currentPage = 1) => {
    try {
      const result = await episodesProvider.getAll({ currentPage });
      setEpisodes(result.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openEpisode = eSelected => {
    setSelectedEpisode(eSelected);
    handleOpen();
  };

  const handleChange = (event, value) => {
    setLoading(true);
    setPage(value);
    getAllEpisodes(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <RowCentered>
        <Pagination
          count={2}
          page={page}
          onChange={handleChange}
          variant="outlined"
        />
        {loading ? <AbsoluteLoading size={32} value={75} /> : ''}
      </RowCentered>
      {loading ? (
        ''
      ) : (
        <EpisodesGridContainer container>
          {episodes.map(
            episode =>
              episode && (
                <EpisodeGridCell
                  item
                  lg={2}
                  md={3}
                  sm={4}
                  xs={6}
                  key={episode.id}
                >
                  <Tooltip title={`Episodio ${episode.id}`}>
                    <span onClick={() => openEpisode(episode)}>{episode.id}</span>
                  </Tooltip>
                </EpisodeGridCell>
              )
          )}
        </EpisodesGridContainer>
      )}
      <Modal open={open} onClose={handleClose}>
        <EpisodeInfo selectedEpisode={selectedEpisode} />
      </Modal>
    </>
  );
};
