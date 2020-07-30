import HTTP from '.'

export default {

    fetchItemEntriesPaginated(pageNumber, pageSize) {
        return HTTP.get(`/itemEntries?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    },
    fetchItemEntryById(id) {
        return HTTP.get(`/itemEntries/${id}`);
    },
    createItemEntry(itemEntry, file) {
        let data = new FormData();
        data.append("file", file);
        data.append("title", itemEntry.title);
        data.append("seatMaterial", itemEntry.seatMaterial);
        data.append("handlebar", itemEntry.handlebar);
        data.append("paving", itemEntry.paving);
        data.append("description", itemEntry.description);
        data.append("locationLat", itemEntry.locationLat);
        data.append("locationLng", itemEntry.locationLng);
        return HTTP.post('/itemEntries/createItemEntry', data);
    },
    updateItemEntry(id, itemEntry, file) {
        let data = new FormData();
        data.append("file", file);
        data.append("title", itemEntry.title);
        data.append("seatMaterial", itemEntry.seatMaterial);
        data.append("handlebar", itemEntry.handlebar);
        data.append("paving", itemEntry.paving);
        data.append("description", itemEntry.description);
        data.append("locationLat", itemEntry.locationLat);
        data.append("locationLng", itemEntry.locationLng);
        return HTTP.post(`/itemEntries/${id}/update`, data);
    },
    fetchItemEntries(){
        return HTTP.get(`/itemEntries/map`);
    },
    deleteById(id) {
      return HTTP.post(`/itemEntries/${id}/delete`);
    },
}

